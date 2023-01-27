<?php

namespace Nearata\EncryptMail\Listener;

use Illuminate\Mail\Events\MessageSending;
use Illuminate\Support\Str;

class MessageSendingListener
{
    public function handle(MessageSending $event)
    {
        $enc = $this->encrypt($event->message->getBody(), $event->message->getTo());

        $event->message->setBody($enc);
    }

    private function encrypt(string $body, array $addresses)
    {
        // Flarum doesn't sends email to multiple users at once
        if (count($addresses) > 1) {
            return $body;
        }

        $filename = Str::random(20) . '.txt';

        /** @var \Illuminate\Filesystem\FilesystemAdapter */
        $filesystem = resolve('filesystem')->disk('nearataEncryptMail');

        $filesystem->put($filename, $body);

        $path = $filesystem->path($filename);

        $email = array_keys($addresses)[0];

        // --trust-model always
        exec("gpg --always-trust --encrypt -a -r $email $path", $output, $resultCode);

        if ($resultCode != 0) {
            return $body;
        }

        $enc = $filesystem->get("$filename.asc");

        $filesystem->delete($filename);
        $filesystem->delete("$filename.asc");

        return $enc;
    }
}
