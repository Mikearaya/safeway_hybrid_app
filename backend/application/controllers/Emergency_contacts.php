<?php

class Emergency_contacts extends API
{

    function __construct($config = 'rest')
    {
        $this->model = "emergency_contacts_model";
        $this->post_validator = "add_emergency_contact";
        $this->put_validator = "update_emergency_contact";
        parent::__construct($config);
    }
}
