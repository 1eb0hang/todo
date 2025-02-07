package com.wren.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
@Table(name="tasks")
public class Task{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "title")
  private String title;

  private LocalDate due;

  private LocalDate schedule;

  private String description;

  public Task(){}

  public Task(int id, String title){
    this.id = id;
    this.title = title;
    due = null;
    schedule = null;
    description = null;
  }

  public Task(int id, String title, LocalDate due, LocalDate schedule, String description){
    this.id = id;
    this.title = title;
    this.due = due;
    this.schedule = schedule;
    this.description = description;
  }

  public int getId(){return id;}
  public String getTitle(){return title;}
  public LocalDate getDue(){return due;}
  public LocalDate getSchedule(){return schedule;}
  public String getDescription(){return description;}

}
