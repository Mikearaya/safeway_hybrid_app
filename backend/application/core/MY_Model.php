<?php 


class MY_Model extends CI_Model
{

    protected $table_name;
    protected $primary_key;

    function __construct()
    {
        $this->load->database();
    }


    function get_by_id($id) {
            $this->db->where($this->primary_key, $id);
            $result_set = $this->db->get($this->table_name);
            return $result_set->row_array();
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


    function update($id, $data) {
      $this->db->where($this->primary_key, $id);
      return $this->db->update($this->table_name, $data);
    }



  public function delete($id) {
    $deletedIds = [];
    try {
      foreach($id  as $key => $value) {
        $deletedIds[] = $value;
      }
      $this->db->where_in($this->primary_key, $deletedIds);
      $this->db->delete($this->table_name);
      return ($this->db->affected_rows() > 0) ? true : false;
    } catch (Exception $e) {
      return false;
		}
	}


    
}
 