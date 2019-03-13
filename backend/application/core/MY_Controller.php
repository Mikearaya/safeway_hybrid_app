<?php

defined('BASEPATH') OR exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';


class API extends REST_Controller
{

<<<<<<< HEAD
    protected $model;
    protected $post_validator;
    protected $put_validator;

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->model($this->model);
        $this->load->library('form_validation');
    }


    public function index_GET($id = NULL)
    {
        $models = $this->model;

        if($id === NULL) {
            $result = $this->$models->get_list();
        } else {
            $result = $this->$models->get_by_id($id);
        }
        
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


    public function update_POST($id)
    {
        $models = $this->model;

         if($this->form_validation->run($this->put_validator) === false) {
            $this->response($this->validation_errors(), API::HTTP_UNPROCESSABLE_ENTITY);
        } else {

            $result = $this->$models->update($id, $this->input->post());
            $this->response(null, API::HTTP_NO_CONTENT);

            if($result !== null) {
                $this->response($result, API::HTTP_CREATED);
            } else {
                $this->response(null, API::HTTP_UNPROCESSABLE_ENTITY);
            }
        }


    }


    public function delete_POST()
    {

        $models = $this->model;
        $result = $this->$models->delete($this->input->post('id'));
        
        if($result) {
            $this->response($result, API::HTTP_NO_CONTENT);
        } else {
            $this->response(false, API::HTTP_BAD_REQUEST);
	    }

	}
    
    
}
 
=======
}

?>
>>>>>>> 4dd2d0400f54e30ceb4cdcf9e1baf3e4c2e2454b
