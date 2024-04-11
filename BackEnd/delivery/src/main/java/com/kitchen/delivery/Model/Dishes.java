package com.kitchen.delivery.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Dishes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String dishName;
    private int price;

    private String cuisine;
    private boolean veg;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public boolean isVeg() {
        return veg;
    }

    public void setVeg(boolean veg) {
        this.veg = veg;
    }

    public Dishes() {
    }

    public Dishes(int id, String dishName, int price, String cuisine, boolean veg) {
        this.id = id;
        this.dishName = dishName;
        this.price = price;
        this.cuisine = cuisine;
        this.veg = veg;
    }

    @Override
    public String toString() {
        return "Dishes{" +
                "id=" + id +
                ", dishName='" + dishName + '\'' +
                ", price=" + price +
                ", cuisine='" + cuisine + '\'' +
                ", veg=" + veg +
                '}';
    }

}
