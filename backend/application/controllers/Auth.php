<?php


class Auth extends API
{

    function __construct($config = 'rest')
    {
        parent::__construct($config);
        $this->load->model('auth_model');
    }
    public function index_post()
    {
        $result = $this->auth_model->authenticate_user($this->request->body);

        if ($result === false) {
            $this->set_response(null, API::HTTP_UNAUTHORIZED);
        } else {

            $tokenData = array();
            $tokenData['id'] = $result['ID'];
            $tokenData['userName'] = $result['username'];
            $output['token'] = AUTHORIZATION::generateToken($tokenData);

            $this->set_response($output, API::HTTP_OK);
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
        } else {
            $this->set_response("Unauthorised", API::HTTP_UNAUTHORIZED);
        }
    }
}
