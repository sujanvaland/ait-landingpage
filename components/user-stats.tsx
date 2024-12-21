'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion, Variants } from "framer-motion"
import { UserPlus, Video, FileText, Image, ThumbsUp, MessageSquare, Flag, Share2, Reply, Clock, Eye, Users, PieChart, Calendar, Play } from 'lucide-react'

interface Stat {
  category: 'CC' | 'CR' | 'B'
  icon: React.ElementType
  label: string
  value: number
  total: number
  unit: string
}

const stats: Stat[] = [
  { category: 'B', icon: UserPlus, label: 'Signups', value: 1, total: 1, unit: '' },
  { category: 'CR', icon: Video, label: 'Video Content Posts', value: 5, total: 10, unit: '' },
  { category: 'CR', icon: FileText, label: 'Text Posts', value: 15, total: 20, unit: '' },
  { category: 'CR', icon: Image, label: 'Image Content Posts', value: 8, total: 15, unit: '' },
  { category: 'CC', icon: ThumbsUp, label: 'Likes Given', value: 50, total: 100, unit: '' },
  { category: 'CC', icon: MessageSquare, label: 'Comments Made', value: 30, total: 50, unit: '' },
  { category: 'CC', icon: Flag, label: 'Reports Submitted', value: 2, total: 5, unit: '' },
  { category: 'CC', icon: Share2, label: 'Posts Shared', value: 10, total: 20, unit: '' },
  { category: 'CC', icon: ThumbsUp, label: 'Comments Liked', value: 25, total: 50, unit: '' },
  { category: 'CC', icon: Reply, label: 'Comments Replied', value: 15, total: 30, unit: '' },
  { category: 'B', icon: Users, label: 'Users Invited', value: 3, total: 5, unit: '' },
  { category: 'CR', icon: Eye, label: 'Content Views', value: 500, total: 1000, unit: '' },
  { category: 'B', icon: Clock, label: 'Time Spent on Platform', value: 120, total: 240, unit: 'hours' },
  { category: 'CR', icon: PieChart, label: 'Poll Posts', value: 3, total: 5, unit: '' },
  { category: 'CR', icon: Calendar, label: 'Event Posts', value: 2, total: 5, unit: '' },
  { category: 'CC', icon: PieChart, label: 'Poll Votes', value: 20, total: 30, unit: '' },
  { category: 'CC', icon: Calendar, label: 'Events Attended', value: 3, total: 5, unit: '' },
  { category: 'CC', icon: Play, label: 'Video Watch Time', value: 300, total: 600, unit: 'minutes' },
]

export function UserStats() {
  const fadeInUp : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your AITCircle Stats
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  <Badge 
                    variant={stat.category === 'CC' ? 'default' : stat.category === 'CR' ? 'secondary' : 'outline'}
                  >
                    {stat.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <stat.icon className="h-4 w-4 text-blue-800" />
                    <div className="flex-1">
                      <Progress value={(stat.value / stat.total) * 100} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                    <span>{stat.value} / {stat.total} {stat.unit}</span>
                    <span>{((stat.value / stat.total) * 100).toFixed(0)}%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

