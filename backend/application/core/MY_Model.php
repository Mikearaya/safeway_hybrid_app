<?php 


class MY_Model extends CI_Model
{

    protected $table_name;
    protected $child_tables ;
    protected $primary_key;

    function __construct()
    {
      
        $this->load->database();
    }


    function get_by_id($id) {
            $this->db->where($this->primary_key, $id);
            
            $result_set = $this->db->get($this->table_name);
            $result[$this->table_name] = $result_set->row_array();
            foreach ($this->child_tables as $table => $primary_key) {
                $this->db->where($primary_key, $id);
                $result_set = $this->db->get($table);
                $result[$table] = $result_set->result_array();
            }

            return $result;
    
          }

    function get_list()
    {
        $result = $this->db->get($this->table_name);
        return $result->result_array();
    }


    function add($data)
    {
      if($data[$this->table_name]) {
        $this->db->insert($this->table_name, $data[$this->table_name]);
      }

    $new_id = $this->db->insert_id();
      if( count($this->child_tables) > 0) {
        foreach ($this->child_tables as $key => $value) {
          
          if($data[$key]) {
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
      $this->db->update($this->table_name, $data[$this->table_name]);
      

      if(count($this->child_tables) > 0) {
      foreach ($this->child_tables as $key => $value) {
        $updated = [];
        $inserted = [];
        
      
        if( $data[$key]) {
          
          for( $i = 0; $i < count($data[$key]); $i++) {
            $data[$key][$i][$value] = $data[$this->table_name][$this->primary_key];
            if(isset( $data[$key][$i][$this->primary_key])) {
              $updated[] = $data[$key][$i];
            } else {
            $inserted[] = $data[$key][$i];        
            };
          }
          if($updated) {
          $this->db->update_batch($key, $updated, 'ID');          
          }  if($inserted)  {
            $this->db->insert_batch($key, $inserted);
          }

        }
      }

      }
    }



  public function delete($id) {
    $deletedIds = [];
    try {
      
      foreach($id  as $key => $value) {
        $deletedIds[] = current($value);
    

      }
      $this->db->where_in($this->primary_key, $deletedIds);
      $this->db->delete($this->table_name);
      return ($this->db->affected_rows() > 0) ? true : false;
    } catch (Exception $e) {
      return false;
		}
	}


    
}
 