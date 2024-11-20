import { PropsWithChildren } from "react";
import { BookmarkCheck, MonitorPlay, Popcorn, Telescope, UserRound } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white h-full" style={{ gridArea: "sidebar" }}>
      <SidebarHeader>
        <h1>Header Content</h1>
      </SidebarHeader>
      {children}
      <SidebarFooter>
        <p>Footer Content</p>
      </SidebarFooter>
    </div>
  );
};

const item = [
  {
    title: "Discover",
    url: "#",
    icon: Telescope,
  },
];
const itemsMovie = [
  {
    title: "Now playing",
    url: "#",
    icon: Popcorn,
  },
  {
    title: "Popular",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Top rated",
    url: "#",
    icon: BookmarkCheck,
  },
];
const itemsShow = [
  {
    title: "On the air",
    url: "#",
    icon: MonitorPlay,
  },
  {
    title: "Popular",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Top rated",
    url: "#",
    icon: BookmarkCheck,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {item.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarGroupLabel>Movies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsMovie.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>TV Shows</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsShow.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}