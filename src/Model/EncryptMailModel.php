<?php

namespace Nearata\EncryptMail\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property int $id
 * @property string $public_key
 * @property boolean $imported
 * @property User $user
 */
class EncryptMailModel extends AbstractModel
{
    protected $table = 'nearata_encrypt_mail';

    protected $fillable = ['id', 'public_key'];

    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

    public static function findByEmailOrCreate(string $email): ?self
    {
        /** @var ?self */
        $f = static::whereHas('user', function ($query) use ($email) {
            $query->where('email', $email);
        })->first();

        if (is_null($f)) {
            /** @var User */
            $user = User::where('email', $email)->first();

            if (is_null($user)) {
                return null;
            }

            $gpg = new static;
            $gpg->id = $user->id;

            return $gpg;
        }

        return $f;
    }
}
