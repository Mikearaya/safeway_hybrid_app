<?php 

class Forums extends API
{
    function __construct($config = 'rest')
    {
        $this->model = 'forums_model';
        $this->post_validator = 'create_forum';
        $this->put_validator = 'update_forum';

        parent::__construct($config);
    }
}
 