
<?php 

class Emergency_contacts_Model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
        $this->table_name = 'emergency_contact';
        $this->primary_key = 'ID';
        $this->child_tables = array('emergency_contact_locale' => 'EMERGENCY_ID');
    }
}
