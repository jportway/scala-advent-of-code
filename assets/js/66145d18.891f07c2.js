"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99],{1237:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(5623),o=["components"],s={},p="Day 4: Giant Squid",u={unversionedId:"puzzles/day4",id:"puzzles/day4",isDocsHomePage:!1,title:"Day 4: Giant Squid",description:"by @Sporarum, student at EPFL.",source:"@site/target/mdoc/puzzles/day4.md",sourceDirName:"puzzles",slug:"/puzzles/day4",permalink:"/scala-advent-of-code/puzzles/day4",editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/puzzles/day4.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 3: Binary Diagnostic",permalink:"/scala-advent-of-code/puzzles/day3"},next:{title:"Day 5: Hydrothermal Venture",permalink:"/scala-advent-of-code/puzzles/day5"}},d=[{value:"Puzzle description",id:"puzzle-description",children:[],level:2},{value:"Parsing",id:"parsing",children:[{value:"Parsing Numbers",id:"parsing-numbers",children:[],level:3},{value:"Parsing Boards",id:"parsing-boards",children:[],level:3}],level:2},{value:"Reasoning about the problem",id:"reasoning-about-the-problem",children:[],level:2},{value:"Solution of Part 1",id:"solution-of-part-1",children:[],level:2},{value:"Solution of Part 2",id:"solution-of-part-2",children:[],level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",children:[{value:"Part 1",id:"part-1",children:[],level:4},{value:"Part 2",id:"part-2",children:[],level:4}],level:2},{value:"Run it locally",id:"run-it-locally",children:[],level:2},{value:"Solutions from the community",id:"solutions-from-the-community",children:[],level:2}],m={toc:d};function c(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"day-4-giant-squid"},"Day 4: Giant Squid"),(0,l.kt)("p",null,"by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sporarum"},"@Sporarum"),", student at EPFL."),(0,l.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/4"},"https://adventofcode.com/2021/day/4")),(0,l.kt)("h2",{id:"parsing"},"Parsing"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example Input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"14,30,18,8,3,10,77,4,48,67,28,38,63,43,62,12,68,88,54,32,17,21,83,64,97,53,24,2,60,96,86,23,20,93,65,34,45,46,42,49,71,9,61,16,31,1,29,40,59,87,95,41,39,27,6,25,19,58,80,81,50,79,73,15,70,37,92,94,7,55,85,98,5,84,99,26,66,57,82,75,22,89,74,36,11,76,56,33,13,72,35,78,47,91,51,44,69,0,90,52\n\n13 62 38 10 41\n93 59 60 74 75\n79 18 57 90 28\n56 76 34 96 84\n78 42 69 14 19\n\n96 38 62  8  7\n78 50 53 29 81\n88 45 34 58 52\n33 76 13 54 68\n59 95 10 80 63\n\n36 26 74 29 55\n43 87 46 70 21\n 9 17 38 58 63\n56 79 85 51  2\n50 57 67 86  8\n\n29 78  3 24 79\n15 81 20  6 38\n97 41 28 42 82\n45 68 89 85 92\n48 33 40 62  4\n\n<elided>\n"))),(0,l.kt)("p",null,"The input has two parts.\nFirst, a list of all numbers from 1 to 99 drawn in a random order (without repetition).\nThen, after two newlines, a list of bingo boards, separated again by double newlines. We notice they also contain only numbers from 1 to 99."),(0,l.kt)("p",null,"Since the numbers and the list of boards are all separated by double newlines, we can split our input into sections as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val inputSections: List[String] = input.split("\\n\\n").toList\n')),(0,l.kt)("p",null,"Once that's done, we can separate the parts by just using ",(0,l.kt)("inlineCode",{parentName:"p"},"head")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"tail"),", thus giving us the numbers, and the list of boards, but those are still only text!"),(0,l.kt)("h3",{id:"parsing-numbers"},"Parsing Numbers"),(0,l.kt)("p",null,"For the numbers, since they are separated by ",(0,l.kt)("inlineCode",{parentName:"p"},",")," and nothing else, we can parse them with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val numbers: List[Int] = inputSections.head.split(',').map(_.toInt)\n")),(0,l.kt)("h3",{id:"parsing-boards"},"Parsing Boards"),(0,l.kt)("p",null,"A board is a table of integers, and a table is a list of lines, where each line is also list.\nAnd so we have our type for the boards: ",(0,l.kt)("inlineCode",{parentName:"p"},"List[List[Int]]"),"!"),(0,l.kt)("p",null,"But not so fast, we would like to add some extra operations on boards, so we wrap it in a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/tour/case-classes.html"},"case class"),":\n(don't worry if you don't understand the methods, we'll explain them later)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"case class Board(lines: List[List[Int]]):\n  def mapNumbers(f: Int => Int): Board = Board(lines.map(_.map(f)))\n  def columns: List[List[Int]] = lines.transpose\n")),(0,l.kt)("p",null,"Now that we have our representation, we still have to actually parse the string that represents a board, for that we'll create a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/scala3/book/taste-objects.html"},"companion object")," with a method ",(0,l.kt)("inlineCode",{parentName:"p"},"parse")," that takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," as input, and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Board"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"object Board:\n  def parse(inputBoard: String): Board = ???\n")),(0,l.kt)("p",null,"Let's start from the ground up. Assuming we have a line, how do we find all the numbers?\nWe can use a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regular_expression"},"regular expression"),"(Regexes):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"digit" -> ',(0,l.kt)("inlineCode",{parentName:"li"},"\\d")),(0,l.kt)("li",{parentName:"ul"},'"one or more" -> ',(0,l.kt)("inlineCode",{parentName:"li"},"+")),(0,l.kt)("li",{parentName:"ul"},'"one or more digits" -> ',(0,l.kt)("inlineCode",{parentName:"li"},"\\d+"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val numberParser = raw"\\d+".r\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"raw")," allows us to write things like ",(0,l.kt)("inlineCode",{parentName:"p"},"\\d")," without it being translated as a line return.\n",(0,l.kt)("inlineCode",{parentName:"p"},".r")," converts our ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex"),"."),(0,l.kt)("p",null,"For each line, ",(0,l.kt)("inlineCode",{parentName:"p"},"numberParser")," finds every number in it, and we parse them to ",(0,l.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def parseLine(inputLine: String): List[Int] =\n  numberParser.findAllIn(inputLine).toList.map(_.toInt)\n")),(0,l.kt)("p",null,"And the lines are separated by newlines:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val lines = inputBoard.split('\\n').toList\nBoard(lines.map(parseLine))\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"lines.map(parseLine)")," means:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"create a new list"),(0,l.kt)("li",{parentName:"ol"},"for each ",(0,l.kt)("inlineCode",{parentName:"li"},"line")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"lines")," put ",(0,l.kt)("inlineCode",{parentName:"li"},"parseLine(line)")," in the list")),(0,l.kt)("p",null,"This gives us a ",(0,l.kt)("inlineCode",{parentName:"p"},"List[List[Int]]"),", which we use to construct a ",(0,l.kt)("inlineCode",{parentName:"p"},"Board"),"."),(0,l.kt)("p",null,"Since we have multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"Board"),"s:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val originalBoards: List[Board] = inputSections.tail.map(Board.parse)\n")),(0,l.kt)("h2",{id:"reasoning-about-the-problem"},"Reasoning about the problem"),(0,l.kt)("p",null,'It\'s kind of difficult to think about all those numbers being picked at random turn.\nWe can simplify the problem by replacing each number by the "turn" at which it was drawn.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"zipWithIndex")," transforms our list of numbers into a list of number-index pair, where the index is, in this case, the turn at which the number is picked.\nWe can then convert it to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),", to be able to use it like a function.\nTo be able also to go back, we invert our ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," by swapping its keys and values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val numberToTurn = numbers.zipWithIndex.toMap\nval turnToNumber = numberToTurn.map(_.swap)\n")),(0,l.kt)("p",null,"Our simplified boards are therefore:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val boards = originalBoards.map(board => board.mapNumbers(numberToTurn))\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"mapNumbers")," method defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"Board")," takes a function and apply it to each number in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Board")," to construct a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Board"),"."),(0,l.kt)("p",null,"It is now time to find when a board wins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def winningTurn(board: Board): Int =\n")),(0,l.kt)("p",null,"A line is completed at the turn that is its maximum element. Only a single line needs to be full for a board to win, so we only keep the smallest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"  val lineMin = board.lines.map(line => line.max).min\n")),(0,l.kt)("p",null,"The columns work the same way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"  val colMin = board.columns.map(col => col.max).min\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Board.columns")," is computed using ",(0,l.kt)("inlineCode",{parentName:"p"},"transpose"),", which transforms the lines into columns and the columns into lines."),(0,l.kt)("p",null,"A board wins if a line wins or if a column wins, so we return the min:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"  lineMin min colMin\n")),(0,l.kt)("p",null,"Applying ",(0,l.kt)("inlineCode",{parentName:"p"},"winningTurn")," to each board gives us:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val winningTurns: List[(Board, Int)] =\n  boards.map(board => (board, winningTurn(board)))\n")),(0,l.kt)("p",null,"We still need to do one more thing before we can solve the problem: computing the score of a board.\nThe score is the sum of all numbers that have not been drawn yet, times the turn at which the board wins."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def score(board: Board, turn: Int) = ???\n")),(0,l.kt)("p",null,"For each line, the numbers that have not been drawn are the ones bigger than the winning turn of that board.\nWe filter them with ",(0,l.kt)("inlineCode",{parentName:"p"},"lines.filter(_ > turn)"),"."),(0,l.kt)("p",null,"However, only taking the sum would be wrong, as we are using the turns, and not the original numbers!\nWe thus need to map them to their original values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sumNumsNotDrawn = board.lines.map{ line =>\n  line.filter(_ > turn).map(turnToNumber(_)).sum\n}.sum\n")),(0,l.kt)("p",null,"The score is then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"turnToNumber(turn) * sumUnmarkedNums\n")),(0,l.kt)("h2",{id:"solution-of-part-1"},"Solution of Part 1"),(0,l.kt)("p",null,"In part one, we have to compute the score of the first board to win.\nThis is the board whith the smallest winning turn."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val (winnerBoard, winnerTurn) = winningTurns.minBy((_, turn) => turn)\n")),(0,l.kt)("p",null,"And so the score is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val winnerScore = score(winnerBoard, winnerTurn)\n")),(0,l.kt)("h2",{id:"solution-of-part-2"},"Solution of Part 2"),(0,l.kt)("p",null,"In part two, we have to find the score of the last board to win, so we swap the ",(0,l.kt)("inlineCode",{parentName:"p"},"minBy")," by a ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBy")," to get our result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val (loserBoard, loserTurn) = winningTurns.maxBy((_, turn) => turn)\nval loserScore = score(loserBoard, loserTurn)\n")),(0,l.kt)("h2",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,l.kt)("h4",{id:"part-1"},"Part 1"),(0,l.kt)(i.Z,{puzzle:"day4-part1",mdxType:"Solver"}),(0,l.kt)("h4",{id:"part-2"},"Part 2"),(0,l.kt)(i.Z,{puzzle:"day4-part2",mdxType:"Solver"}),(0,l.kt)("h2",{id:"run-it-locally"},"Run it locally"),(0,l.kt)("p",null,"You can get this solution locally by cloning the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-advent-of-code"},"scalacenter/scala-advent-of-code")," repository."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git clone https://github.com/scalacenter/scala-advent-of-code\n$ cd scala-advent-of-code\n")),(0,l.kt)("p",null,"You can run it with ",(0,l.kt)("a",{parentName:"p",href:"https://scala-cli.virtuslab.org/"},"scala-cli"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ scala-cli src -M day4.run\nThe answer of part 1 is 14093.\nThe answer of part 2 is 17388.\n")),(0,l.kt)("p",null,"You can replace the content of the ",(0,l.kt)("inlineCode",{parentName:"p"},"input/day4")," file with your own input from ",(0,l.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/4"},"adventofcode.com")," to get your own solution."),(0,l.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tOverney/AdventOfCode2021/blob/main/src/main/scala/ch/overney/aoc/day4/"},"Solution")," of ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tOverney"},"@tOverney"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/FlorianCassayre/AdventOfCode-2021/blob/master/src/main/scala/adventofcode/solutions/Day04.scala"},"Solution")," of ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/FlorianCassayre"},"@FlorianCassayre"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Jannyboy11/AdventOfCode2021/blob/main/src/main/scala/day04/Day04.scala"},"Solution")," of ",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/JanBoerman95"},"Jan Boerman"),".")),(0,l.kt)("p",null,"Share your solution to the Scala community by editing this page."))}c.isMDXComponent=!0}}]);