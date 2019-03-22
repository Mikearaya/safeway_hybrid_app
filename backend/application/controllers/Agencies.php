
<?php

class Agencies extends API
{

    function __construct($config = 'rest')
    {
        $this->model = "agencies_model";
        $this->post_validator = "add_agency";
        $this->put_validator = "update_agency";
        parent::__construct($config);
    }
}
