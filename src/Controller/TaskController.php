<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaskController
{
    /**
     * @Route("/")
     */
    public function taskList() {
        return new Response('Welcome to the Awesome Task List');
    }
}
