<?php


class Lesson_Types extends API
{

    function __construct($config = 'rest')
    {
        $this->model = 'lesson_type_model';
        $this->post_validator = 'add_lesson_type';
        $this->put_validator = 'update_lesson_type';
        parent::__construct($config);
    }
}
