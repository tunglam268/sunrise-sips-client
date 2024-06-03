"use client"
import React, {useState} from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {cn} from "@/lib/utils";

const StyleGuide = () => {
    const [date, setDate] = useState(Date)
    return (
        <>
            {/* typography */}
            <div className={'flex flex-col gap-y-4 p-24'}>
                <h1>Heading1</h1>
                <h2>Heading2</h2>
                <h3>Heading3</h3>
                <p>

                </p>
                <div className={'bg-black p-24 flex flex-col gap-y-4'}>
                    <Link href={'/'}>Link</Link>
                    {/*Button*/}
                    <Button variant={'default'}>Let's eat</Button>
                    <Button variant={'orange'}>Let's eat</Button>
                    <Button variant={'input'}>Let's eat</Button>
                    <Button variant={'orange'} size={`sm`}>Let's eat</Button>
                    {/*Label*/}
                    <div>
                        <Label htmlFor={'firstname'}>First name</Label>
                        <Input type={'firstname'} id='firstname'/>
                    </div>
                    <div>
                        <Label htmlFor={'lastname'}>Last name</Label>
                        <Input type={'lastname'} id='lastname'/>
                    </div>
                    {/*Calendar*/}
                    <div>
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"input"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/*Select*/}
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StyleGuide