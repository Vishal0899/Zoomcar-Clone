import React from 'react'
import {
    Box, Flex, Image, Input, Button, useDisclosure, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Register = () => {
  return (
    <div>
        Register here 
        <Signup />
        {/* hii */}
    </div>
  )
}


const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} >Register</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="Name"
                  // onChange={handleChange}
                  placeholder="Name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="Email"
                  // onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="Number"
                  // onChange={handleChange}
                  placeholder="Mobile Number"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="Password"
                  // onChange={handleChange}
                  placeholder="Password"
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3}>
                Save
              </Button> */}
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }