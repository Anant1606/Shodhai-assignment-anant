package com.shodh.application.Application.repository;

import com.shodh.application.Application.model.Contest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContestRepository extends JpaRepository<Contest, Long> {
    // Example: find contest by title
    Contest findByTitle(String title);
}
