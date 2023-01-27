<?php

namespace Nearata\EncryptMail;

use Flarum\Extend;
use Illuminate\Mail\Events\MessageSending;
use Nearata\EncryptMail\Filesystem\EncryptMailDisk;
use Nearata\EncryptMail\Listener\MessageSendingListener;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Filesystem)
        ->disk('nearataEncryptMail', EncryptMailDisk::class),

    (new Extend\Event)
        ->listen(MessageSending::class, MessageSendingListener::class),
];
