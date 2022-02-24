<?php

namespace App\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity()
 * @ORM\Table(name="app_user", options={"comment":""})
 */
class User{

     /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @var string
     * @ORM\Column(type="string", length=50)
     */
    private $firstName;
    /**
     * @var string
     * @ORM\Column(type="string", length=50)
     */
    private $lastName;
    /**
     * @var string
     * @ORM\Column(type="string", length=150)
     */
    private $email;
    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $password;
    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="Comment", mappedBy="user")
     */
    private $comments;
    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="Car", mappedBy="creator")
     */
    private $cars;
    /**
     * @var DateTime
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;
    

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->cars = new ArrayCollection();
        $this->createdAt = new DateTime();
    }
    /**
     * Get the value of id
     *
     * @return  int
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param  int  $id
     *
     * @return  self
     */ 
    public function setId(int $id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of firstName
     *
     * @return  string
     */ 
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstName
     *
     * @param  string  $firstName
     *
     * @return  self
     */ 
    public function setFirstName(string $firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get the value of lastName
     *
     * @return  string
     */ 
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastName
     *
     * @param  string  $lastName
     *
     * @return  self
     */ 
    public function setLastName(string $lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of email
     *
     * @return  string
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @param  string  $email
     *
     * @return  self
     */ 
    public function setEmail(string $email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of password
     *
     * @return  string
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @param  string  $password
     *
     * @return  self
     */ 
    public function setPassword(string $password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of comments
     *
     * @return  ArrayCollection
     */ 
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set the value of comments
     *
     * @param  ArrayCollection  $comments
     *
     * @return  self
     */ 
    public function setComments(ArrayCollection $comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get the value of cars
     *
     * @return  ArrayCollection
     */ 
    public function getCars()
    {
        return $this->cars;
    }

    /**
     * Set the value of cars
     *
     * @param  ArrayCollection  $cars
     *
     * @return  self
     */ 
    public function setCars(ArrayCollection $cars)
    {
        $this->cars = $cars;

        return $this;
    }

    /**
     * Get the value of createdAt
     *
     * @return  DateTime
     */ 
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set the value of createdAt
     *
     * @param  DateTime  $createdAt
     *
     * @return  self
     */ 
    public function setCreatedAt(DateTime $createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}