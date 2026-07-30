import React from 'react';
import {
    Scene, Ground, Sun, Cloud, Rainbow, Rain, Girl,
    FlowerPot, Puppy, LeashBranch, BenchGrandma, House, HeartRainbow, ThoughtBubble,
} from './illustrations';

const pages = [
    {
        text: '무지개를 따라간 시온이',
        credit: '글 · 그림 이야기 — 외할머니',
        illust: (
            <Scene>
                <Cloud x={60} y={40} /><Cloud x={320} y={90} scale={0.8} />
                <Rainbow cx={200} cy={300} r={150} bands={6} />
                <Ground /><House x={90} y={210} /><Girl x={230} y={235} pose="wave" />
            </Scene>
        ),
    },
    {
        text: '다섯 살 시온이는 무지개를 아주아주 좋아해요.',
        illust: (
            <Scene>
                <Cloud x={50} y={40} scale={0.8} /><Sun cx={340} cy={45} />
                <Ground /><Girl x={200} y={225} pose="wave" /><Rainbow cx={200} cy={60} r={50} bands={5} opacity={0.9} />
            </Scene>
        ),
    },
    {
        text: '비가 오면 창문에 딱 붙어 무지개를 기다려요.',
        illust: (
            <Scene>
                <Rain /><Ground /><House x={200} y={150} withGirl />
            </Scene>
        ),
    },
    {
        text: '어느 날, 비가 그치고 해님이 반짝 떴어요.',
        illust: (
            <Scene>
                <Cloud x={120} y={60} /><Cloud x={280} y={50} scale={0.9} /><Sun cx={300} cy={80} /><Ground />
            </Scene>
        ),
    },
    {
        text: '짜잔! 하늘에 커다란 무지개가 떴어요!',
        illust: (
            <Scene>
                <Cloud x={40} y={30} scale={0.7} /><Rainbow cx={200} cy={300} r={180} bands={6} /><Sun cx={350} cy={40} /><Ground />
            </Scene>
        ),
    },
    {
        text: '"엄마, 무지개다!" 시온이가 크게 소리쳤어요.',
        illust: (
            <Scene>
                <Rainbow cx={200} cy={300} r={180} bands={6} opacity={0.5} /><Ground /><Girl x={200} y={225} pose="point" />
            </Scene>
        ),
    },
    {
        text: '시온이는 무지개 끝이 궁금했어요.\n무지개를 따라가 보기로 했어요.',
        illust: (
            <Scene>
                <Rainbow cx={320} cy={300} r={220} bands={5} opacity={0.4} /><Ground /><Girl x={150} y={225} pose="walk" />
            </Scene>
        ),
    },
    {
        text: '가다 보니 넘어진 꽃화분이 있었어요.\n시온이가 살짝 일으켜 세워 주었어요.',
        illust: (
            <Scene>
                <Ground /><Girl x={200} y={225} pose="crouch" /><FlowerPot x={130} y={240} />
            </Scene>
        ),
    },
    {
        text: '조금 더 가니 강아지가 낑낑거렸어요.\n목줄을 살살 풀어 주었어요.',
        illust: (
            <Scene>
                <Ground /><LeashBranch x={260} y={245} /><Girl x={180} y={225} pose="crouch" /><Puppy x={260} y={245} />
            </Scene>
        ),
    },
    {
        text: '강아지는 꼬리를 흔들며 좋아했어요. "잘 가!"',
        illust: (
            <Scene>
                <Ground /><Girl x={150} y={225} pose="wave" /><Puppy x={290} y={240} happy />
            </Scene>
        ),
    },
    {
        text: '그런데 이상해요.\n걸어도 걸어도 무지개가 자꾸 멀어져요.',
        illust: (
            <Scene>
                <Rainbow cx={360} cy={300} r={260} bands={4} opacity={0.35} /><Ground /><Girl x={150} y={225} pose="sit" />
            </Scene>
        ),
    },
    {
        text: '벤치에 앉은 할머니가 말씀하셨어요.\n"무지개는 잡을 수 없단다."',
        illust: (
            <Scene>
                <Ground /><BenchGrandma x={270} y={225} /><Girl x={150} y={225} pose="stand" />
            </Scene>
        ),
    },
    {
        text: '"하지만 오늘 참 착한 일을 많이 했구나!"\n할머니가 활짝 웃으셨어요.',
        illust: (
            <Scene>
                <Ground /><BenchGrandma x={260} y={225} /><Girl x={150} y={225} pose="think" /><ThoughtBubble x={150} y={60} />
            </Scene>
        ),
    },
    {
        text: '무지개는 못 잡았지만,\n오늘 하루 정말 즐거웠어요.',
        illust: (
            <Scene>
                <Cloud x={60} y={40} scale={0.7} /><Sun cx={340} cy={50} /><Ground /><Girl x={200} y={225} pose="wave" />
            </Scene>
        ),
    },
    {
        text: '하늘의 무지개는 사라졌어요.\n그래도 마음속엔 예쁜 무지개가 생겼어요.',
        illust: (
            <Scene>
                <Cloud x={80} y={40} scale={0.7} /><Ground /><Girl x={200} y={225} pose="walk" /><HeartRainbow x={200} y={100} scale={1.6} />
            </Scene>
        ),
    },
    {
        text: '그 후로 시온이는 무지개를 볼 때마다\n활짝 웃으며 인사해요. "무지개야, 고마워!"',
        illust: (
            <Scene>
                <Rainbow cx={200} cy={300} r={180} bands={6} /><Cloud x={40} y={30} scale={0.6} /><Ground /><Girl x={200} y={225} pose="wave" />
            </Scene>
        ),
    },
];

export default pages;
