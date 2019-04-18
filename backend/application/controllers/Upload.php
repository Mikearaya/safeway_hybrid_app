<?php

class Upload extends API
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
    }


    public function media_POST($language = 'english', $formId, $tablename)
    {
        $folder_location = "uploads/media/";
        $uploadlocation =  $folder_location . 'permanent/' . $tablename . '/' . $formId . '/' . $language;
        $config['upload_path'] = $uploadlocation;
        $config['allowed_types'] = 'gif|jpg|png|mp3|mp4|flv|wmv|avi';
        $config['max_size']  = 20000000;

        if (!is_dir($folder_location)) {
            mkdir($folder_location, 0777, true);
        }

        if (!is_dir($uploadlocation)) {
            mkdir($uploadlocation, 0777, true);
        }


        $this->load->library('upload', $config);


        if (!$this->upload->do_upload('fileupload')) {
            $error = array('error' => $this->upload->display_errors());

            $this->response($error, API::HTTP_BAD_REQUEST);
        } else {
            $data = array('upload_data' => $this->upload->data());

            $this->response($data, API::HTTP_OK);
        }
    }


    public function media_delete_POST($type, $formId)
    {
        $fileLocation = 'uploads/media/permanent/' . $type . '/' . $formId . '/';

        $this->delete_file($fileLocation, $_REQUEST['fileupload']);
    }



    private function delete_file($directory, $file_name)
    {
        $directory = rtrim($directory, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;


        if (!is_dir($directory) && !is_readable($directory)) {
            return false;
        }


        $dirIteratorObject =  new DirectoryIterator($directory);

        foreach ($dirIteratorObject as $info) {
            if ($info->isFile()) {
                if ($info->getFileName() == $file_name) {
                    var_dump('are equal');
                    var_dump($info->getFilename());
                    var_dump($file_name);
                    unlink($info->getPath() . '/' . $file_name);
                }
            } elseif (!$info->isDot() && $info->isDir()) {
                $this->delete_file($info->getRealPath(), $file_name);
            }
        }
    }
}
