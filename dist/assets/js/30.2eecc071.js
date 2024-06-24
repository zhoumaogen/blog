(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{632:function(s,n,a){s.exports=a.p+"assets/img/thread-demo.bd4917be.png"},694:function(s,n,a){"use strict";a.r(n);var e=a(16),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_4-演练-visual-c-示例程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-演练-visual-c-示例程序"}},[s._v("#")]),s._v(" 4. 演练：Visual C++示例程序")]),s._v(" "),e("h3",{attrs:{id:"_4-1-多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-多线程"}},[s._v("#")]),s._v(" 4.1 多线程")]),s._v(" "),e("ol",[e("li",[s._v("实例程序简介")])]),s._v(" "),e("ul",[e("li",[s._v("该多线程示例小程序旨在体现 C++11 标准的多线程特性"),e("code",[s._v("std::thread")])]),s._v(" "),e("li",[s._v("在队列中存入一定数量的数据后，通过一个或多个线程同时往队列中取出数据")]),s._v(" "),e("li",[s._v("涉及到线程的创建，加入以及"),e("code",[s._v("std::thread")]),s._v("类的部分方法")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("实例详解")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("创建结构体保存临时数据：")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("typedef struct task_tag\n{\n  int data;\n  task_tag(int i) : data(i) { }\n} Task, *PTask;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("消息队列的数据存入与取出操作：")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//数据入栈\nvoid PushTask(PTask pTask)\n{\n    //为消息队列添加唯一互斥锁\n    std::unique_lock<std::mutex> lock(m_queueMutex);\n    m_queue.push(pTask);\n    m_cond.notify_one();\n}\n\nPTask PopTask()\n{\n    PTask pRtn = NULL;\n    std::unique_lock<std::mutex> lock(m_queueMutex);\n    while (m_queue.empty())\n    {\n        m_cond.wait_for(lock, std::chrono::seconds(1));\n    }\n\n    if (!m_queue.empty())\n    {\n        pRtn = m_queue.front();\n        if (pRtn->data != 0)\n            m_queue.pop();\n    }\n\n    return pRtn;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("线程函数：")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('void thread_fun(MessageQueue *arguments) {\n        while (true) {\n        PTask data = arguments->PopTask();\n\n        if (data != NULL) {\n            //std::cout不支持多线程安全，故用printf函数打印\n            printf("Thread is: %d\\n", std::this_thread::get_id());\n            printf("   %d\\n", data->data);\n            Sleep(500);\n            if (0 == data->data) //当data为0，任务完毕，退出循环\n                break;\n            else\n                delete data;\n        }\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("源代码及运行结果")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("实例源码")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// ConsoleApplication1.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。\n//\n\n#include <iostream>\n#include <queue>\n#include <mutex>\n#include <thread>\n#include <chrono>\n#include <memory>\n#include <condition_variable>\n#include <Windows.h>\n\ntypedef struct task_tag\n{\n    int data;\n    task_tag(int i) : data(i) { }\n} Task, *PTask;\n\nclass MessageQueue {\npublic:\n    MessageQueue() {}\n    ~MessageQueue()\n    {\n        if (!m_queue.empty())\n        {\n            PTask pRtn = m_queue.front();\n            delete pRtn;\n        }\n\n    }\n\n    void PushTask(PTask pTask)\n    {\n        std::unique_lock<std::mutex> lock(m_queueMutex);\n        m_queue.push(pTask);\n        m_cond.notify_one();\n    }\n\n    PTask PopTask()\n    {\n        PTask pRtn = NULL;\n        std::unique_lock<std::mutex> lock(m_queueMutex);\n        while (m_queue.empty())\n        {\n            m_cond.wait_for(lock, std::chrono::seconds(1));\n        }\n\n        if (!m_queue.empty())\n        {\n            pRtn = m_queue.front();\n            if (pRtn->data != 0)\n                m_queue.pop();\n        }\n\n        return pRtn;\n    }\n\nprivate:\n    std::mutex m_queueMutex;\n    std::condition_variable m_cond;\n    std::queue<PTask> m_queue;\n};\n\n    void thread_fun(MessageQueue *arguments) {\n        while (true) {\n        PTask data = arguments->PopTask();\n\n        if (data != NULL) {\n            printf("Thread is: %d\\n", std::this_thread::get_id());\n            printf("   %d\\n", data->data);\n            Sleep(500);\n            if (0 == data->data) //Thread end.\n                break;\n            else\n                delete data;\n        }\n    }\n\n    return;\n}\n\nint main(int argc, char *argv[])\n{\n    MessageQueue cq;\n\n    #define THREAD_NUM 3\n    std::thread threads[THREAD_NUM];\n\n    for (int i = 0; i < THREAD_NUM; ++i) {\n        threads[i] = std::thread(thread_fun, &cq);\n    }\n\n    int i = 10;\n    while (i > 0)\n    {\n        Task *pTask = new Task(--i);\n        cq.PushTask(pTask);\n    }\n\n    for (int i = 0; i < THREAD_NUM; ++i) {\n        threads[i].join();\n    }\n\n    system("pause");\n    return 0;\n}\n\n// 运行程序: Ctrl + F5 或调试 >“开始执行(不调试)”菜单\n// 调试程序: F5 或调试 >“开始调试”菜单\n\n// 入门提示:\n//   1. 使用解决方案资源管理器窗口添加/管理文件\n//   2. 使用团队资源管理器窗口连接到源代码管理\n//   3. 使用输出窗口查看生成输出和其他消息\n//   4. 使用错误列表窗口查看错误\n//   5. 转到“项目”>“添加新项”以创建新的代码文件，或转到“项目”>“添加现有项”以将现有代码文件添加到项目\n//   6. 将来，若要再次打开此项目，请转到“文件”>“打开”>“项目”并选择 .sln 文件\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("运行结果：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(632),alt:"多线程"}})])])]),s._v(" "),e("h3",{attrs:{id:"_4-2-消息队列实现简单通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-消息队列实现简单通讯"}},[s._v("#")]),s._v(" 4.2 消息队列实现简单通讯")]),s._v(" "),e("ol",[e("li",[s._v("程序简介：")])]),s._v(" "),e("ul",[e("li",[s._v("在Linux环境下，利用消息队列实现简单通讯")]),s._v(" "),e("li",[s._v("两个C++程序，一个创建消息队列，并往里面传消息，另一个往消息队列里面取消息")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("实例详解：")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("消息队列创建")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#define MSGKEY  1236        //键值\n\nstruct msgbuf\n{\nlong mtype;\nchar mtext[100];\n};\nint msgid;//消息ID\nstruct msgbuf buf;  //注意buf是结构体\n\nmsgid = msgget(MSGKEY, IPC_CREAT | IPC_EXCL);   //创建消息队列\nif (-1 == msgid)     //创建失败返回-1\n{\nperror("msgget");\nexit(1);\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("发送消息")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('memset(&buf, 0, sizeof(buf));   //先清空缓冲区\nscanf("%s", buf.mtext);\nbuf.mtype = 5;  //消息类型（发）为5，可任意设置，但必须与后面一致\n\nret = msgsnd(msgid, &buf, sizeof(buf.mtext), 0);    //发送消息\nif (-1 == ret)  //发送失败\n{\nperror("msgsnd");\nexit(1);\n}\nif (!strncmp(buf.mtext, "bye", 3))  //以bye结束\n{\n/* 结束时通知父进程，要让四个进程全部死亡 */\nbuf.mtype = 3;  //父进程（收）的消息类型\nret = msgsnd(msgid, &buf, sizeof(buf.mtext), 0);//服进程接收消息\nif (-1 == ret)\n{\n    perror("msgsnd");\n    exit(1);\n}\nbreak;\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("接收并输出消息")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('memset(&buf, 0, sizeof(buf));\n\nret = msgrcv(msgid, &buf, sizeof(buf.mtext), 3, 0);//父进程接收消息\nif (-1 == ret)\n{\nperror("msgrcv");\nexit(1);\n}\nif (!strncmp(buf.mtext, "bye", 3))  //以bye结束\n{\nkill(pid, SIGKILL);\nbreak;\n}\nprintf("Receive : %s\\n", buf.mtext);    //把收到的消息打印\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("整体代码：")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//两客户端代码一样，若消息栈被创建，会主动接受消息\n#include <cstdio>\n#include <unistd.h>\n\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <sys/ipc.h>\n#include <sys/msg.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <signal.h>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("#define MSGKEY  1236        //键值")]),s._v(" "),e("p",[s._v("struct msgbuf\n{\nlong mtype;\nchar mtext[100];\n};")]),s._v(" "),e("p",[s._v("int main()\n{\nint msgid;\nint ret;\nstruct msgbuf buf;  //注意buf是结构体\npid_t pid;")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('  msgid = msgget(MSGKEY, IPC_CREAT | IPC_EXCL);   //创建消息队列\n  if (-1 == msgid)     //创建失败返回-1\n  {\n      perror("msgget");\n      exit(1);\n  }\n\n  pid = fork();   //创建子进程，注意必须在创建消息队列之后\n\n  if (-1 == pid)  //创建失败返回-1\n  {\n      perror("fork");\n      exit(1);\n  }\n\n  else if (0 == pid)  //pid为0，则进入子进程\n  {\n      while (1)\n      {\n          memset(&buf, 0, sizeof(buf));   //先清空缓冲区\n          scanf("%s", buf.mtext);\n          buf.mtype = 5;  //消息类型（发）为5，可任意设置，但必须与后面一致\n\n          ret = msgsnd(msgid, &buf, sizeof(buf.mtext), 0);    //发送消息\n          if (-1 == ret)  //发送失败\n          {\n              perror("msgsnd");\n              exit(1);\n          }\n          if (!strncmp(buf.mtext, "bye", 3))  //以bye结束\n          {\n              /* 结束时通知父进程，要让四个进程全部死亡 */\n              buf.mtype = 3;  //父进程（收）的消息类型\n              ret = msgsnd(msgid, &buf, sizeof(buf.mtext), 0);//服进程接收消息\n              if (-1 == ret)\n              {\n                  perror("msgsnd");\n                  exit(1);\n              }\n              break;\n          }\n      }\n  }\n\n  else    //否则，进入父进程\n  {\n      while (1)\n      {\n          memset(&buf, 0, sizeof(buf));\n\n          ret = msgrcv(msgid, &buf, sizeof(buf.mtext), 3, 0);//父进程接收消息\n          if (-1 == ret)\n          {\n              perror("msgrcv");\n              exit(1);\n          }\n          if (!strncmp(buf.mtext, "bye", 3))  //以bye结束\n          {\n              kill(pid, SIGKILL);\n              break;\n          }\n          printf("Receive : %s\\n", buf.mtext);    //把收到的消息打印\n      }\n      waitpid(pid, NULL, 0);  //父进程等待\n  }\n  msgctl(msgid, IPC_RMID, NULL);  //销毁消息队列\n\n  return 0;\n')])])]),e("p",[s._v("}")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("运行结果：")]),s._v(" "),e("ul",[e("li",[s._v("编译后，运行 Linux 的 C++程序，首先查看系统消息队列及内存共享情况：")])]),s._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@ubuntu:/home/mecan/projects/ConsoleApplication2/obj/x64/Debug# ipcs\n\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n0x000004d2 0          mecan      0          0            0\n0x000004d3 32769      mecan      0          0            0\n0x000004d4 98306      root       0          0            0\n\n------ Shared Memory Segments --------\nkey        shmid      owner      perms      bytes      nattch     status\n0x00000000 0          root       644        80         2\n0x00000000 32769      root       644        16384      2\n0x00000000 65538      root       644        280        2\n0x3c81b7f5 98307      mecan      666        4096       0\n\n------ Semaphore Arrays --------\nkey        semid      owner      perms      nsems\n0x000000a7 65536      root       600        1\n0x3c81b7f6 98305      mecan      666        1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ul",[e("li",[s._v("运行程序：")])]),s._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@ubuntu:/home/mecan/projects/ConsoleApplication3/bin/x64/Debug# ./ConsoleApplication3\nroot@ubuntu:/home/mecan/projects/ConsoleApplication3/bin/x64/Debug# ./ConsoleApplication3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("查看消息队列，多出一条：")])]),s._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@ubuntu:/home/mecan/projects/ConsoleApplication2/bin/x64/Debug# ipcs -q\n\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n0x000004d2 0          mecan      0          0            0\n0x000004d3 32769      mecan      0          0            0\n0x000004d4 98306      root       0          0            0\n0x0000007b 131075     root       0          0            0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("Linux 控制台程序间收发消息：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@ubuntu:/home/mecan/projects/ConsoleApplication3/bin/x64/Debug#\nmecan //ConsoleApplication3\nReceive : mecan //ConsoleApplication2\ngsafety //ConsoleApplication2\nReceive : gsafety //ConsoleApplication3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);