<?php

defined('BASEPATH') or exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';


class API extends REST_Controller
{

    protected $model;
    protected $post_validator;
    protected $put_validator;

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->model($this->model);
        $this->load->library('form_validation');
    }

public function index_GET() {
            $models = $this->model;
            $result = $this->$models->get_list();
                $this->response($result, API::HTTP_OK);
}

    public function index_POST()
    {
        if($this ->form_validation->run($this->post_validator) === false) {
            $this->response($this->validation_errors(), API::HTTP_UNPROCESSABLE_ENTITY);
        } else {

            $models = $this->model;
            $result = $this->$models->add($this->input->post());

            if($result !== null) {
                $this->response($result, API::HTTP_CREATED);
            } else {
                $this->response(null, API::HTTP_UNPROCESSABLE_ENTITY);
            }
        }
        
     }
    
    
}
 