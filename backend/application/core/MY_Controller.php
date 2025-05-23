<?php

defined('BASEPATH') or exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';


class API extends REST_Controller
{

    protected $model;
    protected $post_validator;
    protected $put_validator;

    function __construct($config = 'rest')
    {
        parent::__construct($config);
        $this->load->model($this->model);
        $this->load->library('form_validation');
    }


    public function index_GET($id = NULL)
    {

        $language = $this->input->get('language', TRUE);

        $models = $this->model;

        if ($id === NULL) {
            $result = $this->$models->get_list($language);
        } else {
            $result = $this->$models->get_by_id($id, $language);
        }

        $this->response($result, API::HTTP_OK);
    }

    public function index_POST()
    {


        $models = $this->model;
        $result = $this->$models->add($this->request->body);

        if ($result !== null) {
            $this->response($result, API::HTTP_CREATED);
        } else {
            $this->response(null, API::HTTP_UNPROCESSABLE_ENTITY);
        }
    }


    public function update_POST($id)
    {
        $models = $this->model;


        $result = $this->$models->update($id, $this->request->body);

        $this->response(null, API::HTTP_NO_CONTENT);
    }


    public function delete_POST()
    {

        $models = $this->model;
        $result = $this->$models->delete($this->request->body);

        if ($result) {
            $this->response($result, API::HTTP_NO_CONTENT);
        } else {
            $this->response(false, API::HTTP_BAD_REQUEST);
        }
    }
}
