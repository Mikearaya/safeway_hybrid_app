<?php

class Upload extends API
{

    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
    }


    public function media_POST($param, $formId ) {
        $uploadlocation = '/var/www/html/ilo_app/backend/application/controllers/uploads/temp/'.$formId; 
        $config['upload_path']          = $uploadlocation;
        $config['allowed_types']        = 'gif|jpg|png|mp3|mp4';
        $config['max_size']             = 20000000 ;


        if (!is_dir($uploadlocation)) { 
             mkdir( $uploadlocation, 0777, TRUE);

        }

      
        var_dump($formId);
        $this->load->library('upload', $config);

        if (!$this->upload->do_upload( 'fileupload')) {
                $error = array('error' => $this->upload->display_errors());

                $this->response($error, API::HTTP_BAD_REQUEST);
            } else {
                $data = array('upload_data' => $this->upload->data());

            $this->response($data, API::HTTP_OK);
            }
    }

}



?>