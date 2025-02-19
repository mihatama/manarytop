// components/Features.js

import React, { useState } from "react";
import {
  chakra as c,
  SimpleGrid,
  Heading,
  Box,
  Text,
  Button,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

export default function Features() {
  // 詳細テキストの表示/非表示を管理する状態
  const [showDetail, setShowDetail] = useState(false);

  // ボタンを押すと表示を切り替える
  const handleToggle = () => {
    setShowDetail((prev) => !prev);
  };

  // 特徴を簡単に紹介するリスト
  const featureList = [
    {
      title: "オンライン予約",
      description: "ウェブ上で予約ができ、重複予約を防ぐ仕組みを備えています。"
    },
    {
      title: "事前質問票",
      description: "あらかじめ利用者に記入してもらい、当日の作業を減らします。"
    },
    {
      title: "電子での記録管理",
      description: "紙のカルテを減らし、情報を安全に保管・共有できます。"
    },
    {
      title: "分析用レポート",
      description: "利用者の傾向や来所頻度を可視化し、運営に役立てられます。"
    },
  ];

  return (
    <c.section id="features" py={{ base: 10, md: 16 }}>
      <c.div maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        
        {/* 見出し */}
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          なぜこのシステムが選ばれるのか？
        </Heading>

        {/* 特徴を4つ並べて表示 */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {featureList.map((item, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              boxShadow="sm"
              borderRadius="md"
              textAlign="center"
              _hover={{ boxShadow: "md" }}
              transition="box-shadow 0.2s"
            >
              {/* ▼ color を teal.600 から orange.600 に変更 */}
              <Heading fontSize="xl" mb={2} color="orange.600">
                {item.title}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {item.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* ボタンで詳細を開閉 */}
        <Box mt={8} textAlign="center">
          {/* ▼ bg を teal.600 -> orange.600, _hover を teal.700 -> orange.700 に */}
          <Button
            onClick={handleToggle}
            bg="orange.600"
            color="white"
            _hover={{ bg: "orange.700" }}
          >
            {showDetail ? "閉じる" : "もっと詳しく見る"}
          </Button>
        </Box>

        {/* 詳細を折りたたんで表示 */}
        {showDetail && (
          <Box
            mt={8}
            p={{ base: 4, md: 6 }}
            bg="gray.50"
            borderRadius="md"
            boxShadow="sm"
          >
            {/* --- 以下、長文部分 --- */}

            {/* サービスの概要 */}
            {/* ▼ color を teal.600 -> orange.600 に */}
            <Heading fontSize="lg" mb={2} color="orange.600">
              サービス概要
            </Heading>
            <Text fontSize="sm" lineHeight="1.8" mb={4}>
              このシステムは、出産後のサポートなどを行う施設向けに、
              <strong>「予約受付・質問票の事前入力・記録の電子化」</strong>をまとめて行えるように設計されています。
              オンライン上で簡単に予約や質問票への回答が可能で、スタッフの方は日程や利用者の情報を一元管理することができます。
            </Text>

            {/* 主な機能一覧 */}
            <Heading fontSize="lg" mb={2} color="orange.600">
              主な機能
            </Heading>

            {/* 1. 予約機能 */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                1. 予約機能
              </Heading>
              <Text fontSize="sm" fontWeight="bold" mt={2}>
                利用者が予約をする画面
              </Text>
              <UnorderedList fontSize="sm" pl={6} mt={2} mb={3}>
                <ListItem>施設一覧から希望の担当者を選んで予約可能</ListItem>
                <ListItem>カレンダー画面で空いている時間をチェックしてワンクリック予約</ListItem>
                <ListItem>自動的に重複を避ける仕組みで安心</ListItem>
                <ListItem>予約が確定すると通知メールを自動送信</ListItem>
                <ListItem>マイページで過去の予約履歴やキャンセル手続きが可能</ListItem>
              </UnorderedList>

              <Text fontSize="sm" fontWeight="bold" mt={2}>
                スタッフがシフトや予約を管理する画面
              </Text>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>スタッフ情報の登録や、日程(シフト)の追加・編集が簡単</ListItem>
                <ListItem>繰り返しシフトをまとめて作成して負担を減らすことが可能</ListItem>
                <ListItem>仮の予約と本決定の予約を切り替えられる</ListItem>
                <ListItem>定員を越えたら予約を締め切るなどの設定も可能</ListItem>
                <ListItem>カレンダー上で予約の承認や削除をワンクリックで操作</ListItem>
              </UnorderedList>
            </Box>

            {/* 2. 質問票入力・管理 */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                2. 質問票の入力と管理
              </Heading>
              <Text fontSize="sm" fontWeight="bold" mt={2}>
                利用者が事前に入力する場合
              </Text>
              <UnorderedList fontSize="sm" pl={6} mt={2} mb={3}>
                <ListItem>予約完了メールやマイページから質問票画面にアクセス</ListItem>
                <ListItem>母子の情報、出産時の経緯、体調などを先に入力してもらう</ListItem>
                <ListItem>入力データは安全に保管され、スタッフが確認できる</ListItem>
              </UnorderedList>

              <Text fontSize="sm" fontWeight="bold" mt={2}>
                スタッフが確認・修正する場合
              </Text>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>質問票を一覧で確認、検索や並び替えもできる</ListItem>
                <ListItem>内容を開いて素早くチェックし、必要があれば修正・追記が可能</ListItem>
                <ListItem>後から情報を追加・変更することにも対応</ListItem>
              </UnorderedList>
            </Box>

            {/* 3. 電子カルテ作成（電子的な記録） */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                3. 電子での記録作成
              </Heading>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>スタッフ権限のある人が記録ページにアクセスし、ケア内容を入力</ListItem>
                <ListItem>赤ちゃんの発達や母乳の状態などを細かく書き込める</ListItem>
                <ListItem>紙の書類を使わず、データで管理して紛失リスクを減らす</ListItem>
                <ListItem>他のスタッフともリアルタイムで共有しやすい</ListItem>
              </UnorderedList>
            </Box>

            {/* 4. スタッフ管理 */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                4. スタッフ管理
              </Heading>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>施設やスタッフ情報、プロフィール写真などを登録・編集</ListItem>
                <ListItem>一時的に表示をオフにすることも可能</ListItem>
                <ListItem>写真を載せると利用者がどのスタッフかひと目で分かる</ListItem>
              </UnorderedList>
            </Box>

            {/* 5. アカウントの権限 */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                5. アカウントの権限管理
              </Heading>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>利用者用のアカウントでは予約や質問票を操作できる</ListItem>
                <ListItem>スタッフ用のアカウントでは予約や記録の管理など幅広く操作可能</ListItem>
                <ListItem>画面ごとのアクセス権を分けて、誤操作を防ぐ</ListItem>
              </UnorderedList>
            </Box>

            {/* 6. システム面のポイント */}
            <Box mb={4}>
              <Heading fontSize="md" mb={1}>
                6. システム面のポイント
              </Heading>
              <UnorderedList fontSize="sm" pl={6} mt={2}>
                <ListItem>クラウド上で動作し、インフラ管理を極力減らせる</ListItem>
                <ListItem>直感的なカレンダー表示や日付処理で、操作を簡単に</ListItem>
                <ListItem>スマホやタブレットからも利用しやすいデザインを採用</ListItem>
                <ListItem>追加の安全対策を導入し、セキュリティを強化できる</ListItem>
              </UnorderedList>
            </Box>

            {/* 利用メリット */}
            <Heading fontSize="lg" mb={2} color="orange.600">
              使うことで得られるメリット
            </Heading>
            <UnorderedList fontSize="sm" pl={6} spacing={2} mb={4}>
              <ListItem>
                <strong>予約管理が効率化：</strong>
                電話や紙での調整を大幅に減らし、ダブルブッキングの心配も軽減
              </ListItem>
              <ListItem>
                <strong>事前の質問票入力：</strong>
                当日の受付や聞き取り時間を減らし、スタッフも利用者もスムーズに進行
              </ListItem>
              <ListItem>
                <strong>記録をデジタル化：</strong>
                検索や共有がしやすく、保管場所を取らない
              </ListItem>
              <ListItem>
                <strong>見やすい予約画面：</strong>
                カレンダーから24時間いつでもオンライン予約が可能
              </ListItem>
              <ListItem>
                <strong>機能追加が容易：</strong>
                施設・スタッフの増加や新しいメニューなどにも柔軟に対応
              </ListItem>
            </UnorderedList>

            {/* 画面の例 */}
            <Heading fontSize="lg" mb={2} color="orange.600">
              画面の例
            </Heading>
            <UnorderedList fontSize="sm" pl={6} spacing={2} mb={4}>
              <ListItem>
                <strong>トップ画面：</strong>
                施設一覧や写真を表示し、予約カレンダーへの入り口となる
              </ListItem>
              <ListItem>
                <strong>スタッフカレンダー：</strong>
                利用者が予約を確定する画面。空いている時間をクリック
              </ListItem>
              <ListItem>
                <strong>マイページ：</strong>
                自分の予約一覧が見られ、質問票の入力やキャンセル手続きも行える
              </ListItem>
              <ListItem>
                <strong>質問票入力フォーム：</strong>
                母子の状態や受診理由を事前に記入
              </ListItem>
              <ListItem>
                <strong>質問票管理：</strong>
                スタッフがすべての回答を一度に確認し、修正もできる
              </ListItem>
              <ListItem>
                <strong>記録作成ページ：</strong>
                当日のケアの内容や赤ちゃんの様子を入力し、データとして残す
              </ListItem>
              <ListItem>
                <strong>シフト管理：</strong>
                施設追加、繰り返しシフトの登録、予約の承認や削除などをまとめて操作
              </ListItem>
              <ListItem>
                <strong>ログイン画面：</strong>
                利用者かスタッフかを分けつつ、安全に認証を行う
              </ListItem>
            </UnorderedList>

            {/* まとめ */}
            <Heading fontSize="lg" mb={2} color="orange.600">
              まとめ
            </Heading>
            <Text fontSize="sm" lineHeight="1.8">
              このシステムでは、「予約の受付」「事前の質問票入力」「電子化した記録」を
              一つの流れとして管理できます。電話対応や紙の台帳を大幅に減らし、
              事前に情報を集めることで当日の対応がスムーズになり、  
              情報共有も簡単になるため、スタッフの負担を軽くしつつ利用者の満足度も高められます。
              ぜひ導入をご検討ください。
            </Text>
          </Box>
        )}
      </c.div>
    </c.section>
  );
}
