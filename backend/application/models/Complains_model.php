
<?php

class Complains_model extends MY_Model
{

    function __construct()
    {

        $this->table_name = 'complains';
        $this->primary_key = 'ID';
        parent::__construct();
    }


    public function get_list()
    {
        $this->db->select("complains.ID ,complain_type.type as 'complain_type',
        complains.date_added,  complains.passport_id, complains.barcode ");
        $this->db->from('complain_type');
        $this->db->join('complains', 'complain_type.ID = complains.COMPLAIN_TYPE');

        $result_set = $this->db->get();
        return $result_set->result_array();
    }



    public function get_by_id($id)
    {


        $this->db->select("complains.ID ,complain_type.type as 'complain_type',
        complains.date_added,  complains.passport_id, complains.barcode, complains.complain ");
        $this->db->from('complain_type');
        $this->db->join('complains', 'complain_type.ID = complains.COMPLAIN_TYPE');
        $result = $this->db->where('complains.ID', $id);

        $result_set = $this->db->get();
        return $result_set->row_array();
    }
}
