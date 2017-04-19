<?php

namespace App\Core\Models;

use App\Core\Models\Contracts\UserProvider;
use App\Core\Models\Traits\UserProviderable;
use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User
 *
 * @package App\Core\Models
 * @property int $id
 * @property string $email
 * @property string $password
 * @property string $first_name
 * @property string $last_name
 * @property string $avatar
 * @property string $phone
 * @property string $address
 * @property string $remember_token
 * @property int $role_id
 * @property bool $is_verify
 * @property bool $is_active
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class User extends Authenticatable implements UserProvider
{
    use Notifiable,
        UserProviderable;

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['password', 'remember_token'];
    protected $casts = ['is_verify' => 'bool', 'is_active' => 'bool'];
}
