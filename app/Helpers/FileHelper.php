<?php

namespace App\Helpers;

class FileHelper
{

    const IMAGES = ['image/jpeg', 'image/jpeg', 'image/png', 'image/tiff', 'image/x-tiff'];
    const DOCUMENTS = ['application/msword', 'application/pdf', 'text/plain'];

    // basic logic to check file type
    public static function detectFileType($type) {
        if (in_array($type, self::IMAGES)) {
            return 'image';
        } else if (in_array($type, self::DOCUMENTS)) {
            return 'document';
        } else {
            return 'other';
        }
    }
}