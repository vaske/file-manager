<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\File;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return File::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'file' => 'required'
        ]);

        $uploadedFile = $request->file('file');
        $filename = time().$uploadedFile->getClientOriginalName();

        Storage::disk('local')->putFileAs(
          'files/'.$filename,
          $uploadedFile,
          $filename
        );

        $file = new File;
        $file->original_name = $filename;

        $file->save();

        return response()->json([
          'id' => $file->id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $file = File::find($id);
        if (!empty($file)) {
            Storage::delete($file->original_name);
            $file->delete();
            return response()->json(null, 204);
        } else {
            return response()->json('File not exists', 502);
        }

    }

}
