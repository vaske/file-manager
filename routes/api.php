<?php

use Illuminate\Http\Request;
use App\File;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('files', 'FileController@index');
Route::post('files','FileController@store');
Route::get('files/find/{type}','FileController@findByType');
Route::get('files/search','FileController@findByName');
Route::delete('files/{product}', 'FileController@delete');
