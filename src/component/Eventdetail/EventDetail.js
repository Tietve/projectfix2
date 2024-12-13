'use client'

import React, { useState } from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { MockData } from './MockData'; // Chỉ import MockData, không phải MockProduct
import './EventDetail.css'
import { addToCart, incrementQuantity, decrementQuantity } from "./CartReducer";

export default function EventDetail() {
    const id = useParams().id
    const [quantity, setQuantity] = useState(() => {
        const initialQuantities = {};
        MockData.ticket_info.forEach((ticket) => {
            initialQuantities[ticket.id] = 0;
        });
        return initialQuantities;
    });

    const dispatch = useDispatch()

    // Mock event data based on database schema
    const event = MockData;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }
    const initializeQuantity = () => {
        const initialQuantities = {};
        event.ticket_info.forEach((ticket) => {
            initialQuantities[ticket.id] = 0;
        });
        return initialQuantities;
    };
    React.useEffect(() => {
        setQuantity(initializeQuantity());
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="image-container">
                    <img
                        src={event.media[0].url}
                        alt={event.name}
                    />
                </div>


                <div className="space-y-6">
                    <div>
                        <Badge className="mb-2">{event.category}</Badge>
                        <h1 className="text-3xl font-bold">{event.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <CalendarTodayIcon className="w-4 h-4" />
                            <span>{formatDate(event.time_start)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <LocationOnIcon className="w-4 h-4"/>
                            <span>{event.place}</span>
                            <p><span
                                className="font-medium">Duration:</span> {formatDate(event.time_start)} - {new Date(event.time_end).toLocaleTimeString()}
                            </p>
                            <p><span>Max quanlity:</span>{event.max_quantity}</p>
                        </div>
                    </div>

                    <Card className="p-2 max-w-xxs mx-auto card-custom">
                        <div className="space-y-2">
                            <h2 className="font-medium text-sm text-center">Ticket Type</h2>
                            <div className="space-y-1">
                                {event.ticket_info.map((ticket) => (
                                    <div
                                        key={ticket.id}
                                        className={`p-2 rounded-lg border border-gray-200 cursor-pointer text-sm ${
                                            quantity[ticket.id] > 0 ? "border-primary bg-primary/10" : ""
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <h5 className="font-normal text-xs">{ticket.ticket_name}</h5>
                                                <p className="text-xs text-muted-foreground">{ticket.ticket_position}</p>
                                            </div>
                                            <p className="ml-2 text-sm font-medium text-right">${ticket.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </Card>
                    <Button
                        className="w-full"
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    id: event.id,
                                    title: event.name,
                                    tickets: event.ticket_info,
                                    quantities: quantity,
                                })
                            );
                        }}
                    >
                        <AddShoppingCartIcon className="mr-2 h-4 w-4" />
                        Buy now
                    </Button>




                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Event Details</h2>
                        <p className="text-muted-foreground">{event.description}</p>
                        <div className="space-y-2">
                            <p><span className="font-medium">Organizer:</span> {event.organizer}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

