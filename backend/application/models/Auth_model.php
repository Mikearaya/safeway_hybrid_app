<?php


class Auth_Model extends CI_Model
{

    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }


    public function authenticate_user($user)
    {
        $result = $this->db->get_where(
            'user',
            array('username' => $user['username'], 'password' => $user['password'])
        );

        if ($result->num_rows() !== 1) {
            return false;
        } else {
            return $result->row_array();
        }
    }
}
