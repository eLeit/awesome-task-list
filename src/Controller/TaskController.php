<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function taskList() {
        return $this->render('taskList/list.html.twig', [
            'listItems' => [
                'Do the thing that needs to be done',
                'Do the other thing',
                'Do the third thing'
            ]
        ]);
    }
}
