package com.shodh.application.Application.model;

import jakarta.persistence.*;

@Entity
public class Submission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String code;

    private String status;

    @ManyToOne
    private Problem problem;

    @ManyToOne
    private Users user;

    // Getters and setters...
}
