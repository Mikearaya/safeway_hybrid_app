
<?php 

class Schools_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'school';
        $this->primary_key = 'ID';
        parent::__construct();
    }

        function add($data) {
        $result = $this->db->insert($this->table_name, $data);

        if ($this->db->affected_rows() == 1) {
            $new_id =  $this->db->insert_id();
                $lessons_arr = explode(',', $data['LESSON_ID']);
                $school_lessons = array();
                foreach ($lessons_arr as $key => $value) {
                    $school_lessons[] = array('SCHOOL_ID' => $this->db->insert_id(), 'LESSON_ID' => $value);
                }
                
            $this->db->insert_batch('school_lessons', $school_lessons );
            return $new_id;
        } else {
            return false;
        }
    }
}
