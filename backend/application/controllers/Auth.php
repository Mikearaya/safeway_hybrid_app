<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Auth extends API
{

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->model('auth_model');
    }
    public function index_post()
    {
        $this->load->library('form_validation');
        $result = $this->auth_model->authenticate_user($this->input->post());
    
    $this->form_validation->set_rules('username', 'Username', 'trim|required');
    $this->form_validation->set_rules('password', 'Username', 'trim|required');


    
        if($this->form_validation->run() === FALSE) {
        $this->set_response($this->validation_errors());
        } else {
            $result = $this->auth_model->authenticate_user($this->input->post());

            if($result === false) {
                $this->set_response(NULL,API::HTTP_UNAUTHORIZED);
            }  else {

        $tokenData = array();
        $tokenData['id'] = $result['ID']; 
        $output['token'] = AUTHORIZATION::generateToken($tokenData);
        $output['userName'] = $result['username'];
        $this->set_response($output, API::HTTP_OK);        

            }
    
        
        }
        
    }


    public function token_post()
    {
        $headers = $this->input->request_headers();
        if (array_key_exists('Authorization', $headers) && !empty($headers['Authorization'])) {
            $decodedToken = AUTHORIZATION::validateToken($headers['Authorization']);
            if ($decodedToken != false) {
                $this->set_response($decodedToken, API::HTTP_OK);
                return;
            }
        }
        $this->set_response("Unauthorised", API::HTTP_UNAUTHORIZED);
    }
}
