package com.shodh.application.Application.repository;

import com.shodh.application.Application.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {
    // Example: find problems by difficulty or tag if needed later
}
