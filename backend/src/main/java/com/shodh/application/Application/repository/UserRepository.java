package com.shodh.application.Application.repository;

import com.shodh.application.Application.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    // Optional: Custom finder method
    Users findByUsername(String username);  // if your User entity has a "username" field

}
