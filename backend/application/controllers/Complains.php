
<?php

class Complains extends API
{

    function __construct($config = 'rest')
    {
        $this->model = 'complains_model';
        $this->post_validator = 'add_complain';
        $this->put_validator = '';
        parent::__construct($config);
    }
}
