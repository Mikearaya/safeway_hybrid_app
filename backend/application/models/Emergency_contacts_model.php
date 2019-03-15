
<?php 

class Emergency_contacts_Model extends MY_Model
{


    function __construct()
    {
        $this->table_name = 'emergency_contact';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
