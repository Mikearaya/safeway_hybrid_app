<?php 


class MY_Model extends CI_Model
{

    protected $table_name;
    protected $child_tables;
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
      if($data[$this->table_name]) {
        $result = $this->db->insert($this->table_name, $data[$this->table_name]);
      }

    $new_id = $this->db->insert_id();
      if( count($this->child_tables) > 0) {
        foreach ($this->child_tables as $key => $value) {
          
          if( $data[$key]) {
            for($i = 0; $i < count( $data[$key]); $i++ ) {
              $data[$key][$i][$value] = $new_id;
            }

          $this->db->insert_batch( $key, $data[$key]);
          }
        }
    }

        if ($new_id != NULL) {
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
 