"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
interface SidebarProps{
    storageKey?: string;
}

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@radix-ui/react-accordion";

export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {

    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey, {});
    return(
        <div>
            Sidebar!
        </div>
    )
}