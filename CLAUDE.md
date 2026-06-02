# AGENT.md

## Project Overview

本プロジェクトはスタメンのTUNAGを参考にしたポートフォリオアプリである。

飲食店などのノンデスクワーカー環境において発生する

- 誰に声をかけるべきかわからない
- 休憩中に不要な連絡が発生する
- 誰が休憩を取得できているかわからない

といった課題を解決することを目的とする。

単なる状態管理ツールではなく、

「業務DX」
「情報共有促進」
「従業員体験向上」

を実現するプロダクトとして設計する。

---

## Core Concept

### 業務DX

- スタッフ状態の可視化
- 情報共有の効率化
- 不要な電話や声掛けの削減

### エンゲージメント向上

- 休憩取得状況の可視化
- 休憩不足の早期発見
- 働きやすい環境づくり

---

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

---

## Architecture

Feature-Sliced Design を採用する。

```
src
├── app
├── pages
├── widgets
├── features
├── entities
├── shared
```

### layers

#### app

アプリケーション初期化

#### pages

ページ構築

#### widgets

複数featureを組み合わせるUI

#### features

ユーザーアクション

#### entities

ドメインモデル

#### shared

共通UI・ユーティリティ

---

## Feature Structure

```
features
├── status-management
├── break-management
├── employee-filter
├── employee-search
```

---

## Entity Structure

```
entities
├── employee
├── status
├── break-record
```

---

## Main Screens

### Dashboard

スタッフ一覧画面

表示項目

- 名前
- 状態
- 本日の休憩回数
- 本日の休憩時間
- 最終更新時間

---

### Employee Detail

スタッフ詳細画面

表示項目

- 基本情報
- 状態履歴
- 休憩履歴

---

## Status Types

飲食店向け状態を採用する。

```ts
type EmployeeStatus =
  | 'preparing'
  | 'serving'
  | 'break'
  | 'cleaning'
  | 'available'
  | 'off-duty';
```

表示文言

- 仕込み中
- 接客中
- 休憩中
- 清掃中
- 対応可能
- 退勤

---

## Design Principles

### 課題解決ファースト

状態管理ではなく

「今声をかけていい人が分からない」

という課題解決を重視する。

---

### 人を管理しない

監視ツールとして実装しない。

休憩取得状況の可視化によって

従業員への配慮を促進する。

---

### TUNAGらしさ

業務DXとエンゲージメント向上の両立を意識する。

---

## Frontend Constraints

バックエンド実装は禁止。

API実装は禁止。

モックデータのみ使用する。

データは

```
shared/mocks
```

に配置する。

---

## React Rules

### useEffect禁止

useEffectを使用しない。

データ取得は不要。

モックデータを直接利用する。

状態管理は

- useState
- useMemo
- useReducer

のみ使用する。

---

## UI Rules

- レスポンシブ対応
- モバイルファースト
- シンプルで業務利用を想定
- 情報の視認性を優先

---

## Code Rules

- any禁止
- 型定義を最優先
- Props型は明示
- Server Components優先
- Client Componentは必要最小限

---

## Goal

本アプリは

「ノンデスクワーカーのコミュニケーション効率化と休憩取得状況の可視化を通じて、業務DXと従業員体験向上を実現する」

ことを目的とする。
