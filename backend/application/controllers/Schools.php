<?php

class Schools extends API
{

    function __construct($config = 'rest')
    {
        $this->model = "schools_model";
        $this->post_validator = "add_school";
        $this->put_validator = "update_school";
        parent::__construct($config);
    }
}
