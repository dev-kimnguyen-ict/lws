<?php
/**
 * Created by PhpStorm.
 * User: huukimit
 * Date: 02/02/2017
 * Time: 22:41
 */

namespace App\Core\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Product
 * @package App\Core\Models
 * @property int $id
 * @property string $name
 * @property double $price
 * @property string $thumbnail
 * @property string $description
 * @property bool $is_active
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Product extends Model
{
    protected $casts = ['is_active' => 'bool'];
    protected $fillable = [
        'name',
        'price',
        'thumbnail',
        'description',
        'is_active',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
