<?php 


class MY_Model extends CI_Model
{

    protected $table_name;
    protected $primary_key;

    function __construct()
    {
        $this->load->database();
    }


    function get_list()
    {
        $result = $this->db->get($this->table_name);
        return $result->result_array();
    }


    function add($data)
    {
        $result = $this->db->insert($this->table_name, $data);

        if ($this->db->affected_rows() == 1) {
            $new_id['ID'] =  $this->db->insert_id();
            return $new_id;
        } else {
            return false;
        }
    }
}
 