<?php

$config = array(
    'add_hospital' => array(
        array(
            'field' => 'name',
            'label' => 'Medical center name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        ),
        array(
            'field' => 'address',
            'label' => 'Address',
            'rules' => 'required'
        ),
        array(
            'field' => 'region',
            'label' => 'Region',
            'rules' => 'required'
        )
    ),
        'update_hospital' => array(
            array(
                'field' => 'id',
                'label' => 'Medical center Id',
                'rules' => 'required'
            ),
            array(
                'field' => 'name',
                'label' => 'Medical center name',
                'rules' => 'required'
            ),
            array(
                'field' => 'phone_number',
                'label' => 'Phonenumber',
                'rules' => 'required'
            ),
            array(
                'field' => 'address',
                'label' => 'Address',
                'rules' => 'required'
            ),
            array(
                'field' => 'region',
                'label' => 'Region',
                'rules' => 'required'
            )
    ),    'add_school' => array(
        array(
            'field' => 'name',
            'label' => 'school center name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        ),
        array(
            'field' => 'address',
            'label' => 'Address',
            'rules' => 'required'
        ),
        array(
            'field' => 'region',
            'label' => 'Region',
            'rules' => 'required'
        )
    ),
    'update_school' => array(
        array(
            'field' => 'id',
            'label' => 'school center Id',
            'rules' => 'required'
        ),
        array(
            'field' => 'name',
            'label' => 'school center name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        ),
        array(
            'field' => 'address',
            'label' => 'Address',
            'rules' => 'required'
        ),
        array(
            'field' => 'region',
            'label' => 'Region',
            'rules' => 'required'
        )
        ),
    'add_agency' => array(
        array(
            'field' => 'name',
            'label' => 'Agency name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        )
    ),
    'update_agency' => array(
        array(
            'field' => 'ID',
            'label' => 'Agency Id',
            'rules' => 'required'
        ),
        array(
            'field' => 'name',
            'label' => 'Agency name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        )
        ),
    'add_emergency_contact' => array(
        array(
            'field' => 'name',
            'label' => 'Emergency contact name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        ),
        array(
            'field' => 'address',
            'label' => 'Address',
            'rules' => 'required'
        ),
        array(
            'field' => 'region',
            'label' => 'Region',
            'rules' => 'required'
        )
    ),
    'update_emergency_contact' => array(
        array(
            'field' => 'id',
            'label' => 'Emergency contact Id',
            'rules' => 'required'
        ),
        array(
            'field' => 'name',
            'label' => 'Emergency contact name',
            'rules' => 'required'
        ),
        array(
            'field' => 'phone_number',
            'label' => 'Phonenumber',
            'rules' => 'required'
        ),
        array(
            'field' => 'address',
            'label' => 'Address',
            'rules' => 'required'
        ),
        array(
            'field' => 'region',
            'label' => 'Region',
            'rules' => 'required'
        )
        ),
        'create_forum' => array(
    
        array(
            'field' => 'name',
            'label' => 'Forum topic is required',
            'rules' => 'required'
        ),
    ),
    'update_forum' => array(

        array(
            'field' => 'name',
            'label' => 'Forum topic is required',
            'rules' => 'required'
        ),
    ),
    'add_article_catagory' => array(
    
        array(
            'field' => 'name',
            'label' => 'Article catagory name is required',
            'rules' => 'required'
        ),
    ),
    'update_article_catagory' => array(

        array(
            'field' => 'name',
            'label' => 'Article catagory name is required',
            'rules' => 'required'
        ),
    ),
    'add_article' => array(

        array(
            'title' => 'header',
            'label' => 'Article title is required',
            'rules' => 'required'
        ),
        array(
            'field' => 'CATAGORY_ID',
            'label' => 'Article catagory is required',
            'rules' => 'required'
        ),
        array(
             'title' => 'content',
            'label' => 'Article content is required',
            'rules' => 'required'
        ),
    ),
    'update_article' => array(

        array(
            'field' => 'header',
            'label' => 'Article header title is required',
            'rules' => 'required'
        ),
        array(
            'field' => 'CATAGORY_ID',
            'label' => 'Article catagory is required',
            'rules' => 'required'
        ),
        array(
            'field' => 'content',
            'label' => 'Article content is required',
            'rules' => 'required'
        ),
        )



            );
        


    ?>