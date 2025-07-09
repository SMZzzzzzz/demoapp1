# 🏢 アパレルEC向けマルチ拠点在庫管理システム

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38bdf8)](https://tailwindcss.com/)

## 📋 プロジェクト概要

このシステムは、アパレルEC事業者向けのマルチ拠点在庫管理システムです。4つの主要拠点（自社EC、楽天、Amazon FBA、ZOZOTOWN）の在庫を統合管理し、AI需要予測により適切な在庫管理をサポートします。

### 🎯 対象業界・用途
- **アパレルEC事業者**
- **多拠点展開している小売業者**
- **在庫管理の標準化・自動化を目指す企業**

## ✨ 主要機能

### 📊 ダッシュボード
- 全拠点の在庫状況を一目で把握
- リアルタイム統計情報の表示
- 在庫アラート・最近のアクティビティ表示

### 📦 在庫管理
- 4拠点（自社EC、楽天、Amazon FBA、ZOZOTOWN）の統合管理
- 商品別・拠点別在庫状況の一覧表示
- 高度なフィルター・検索機能
- 在庫ステータス管理（在庫十分・普通・少・切れ）

### 🤖 AI需要予測
- 過去の販売データを基にした需要予測
- 予測精度とモデル信頼度の監視
- 季節性・トレンド・外部要因を考慮した高精度予測
- 視覚的なチャートによる予測結果の表示

### 🔗 システム連携
- CSV連携とAPI連携の両方をサポート
- 各拠点システムとの自動同期
- 連携ログとエラー監視
- 柔軟な同期間隔設定

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 15.3.5** - React フレームワーク（App Router）
- **React 19.0.0** - UI ライブラリ
- **TypeScript 5.6.3** - 型安全な開発
- **Tailwind CSS 4.0** - ユーティリティファーストCSS

### UI・デザイン
- **Lucide React** - アイコンライブラリ
- **Recharts** - チャート・グラフ表示
- **レスポンシブデザイン** - モバイル・デスクトップ対応

### 開発環境
- **Turbopack** - 高速なビルドツール
- **ESLint** - コード品質管理
- **TypeScript** - 型チェック

## 🚀 クイックスタート

### 前提条件
- Node.js 18.0以上
- npm または yarn
- Git

### インストール手順

1. **リポジトリのクローン**
```bash
git clone https://github.com/your-repo/apparel-inventory-management.git
cd apparel-inventory-management
```

2. **依存関係のインストール**
```bash
npm install
```

3. **開発サーバーの起動**
```bash
npm run dev
```

4. **ブラウザでアクセス**
```
http://localhost:3000
```

### 利用可能なコマンド

```bash
# 開発サーバー起動（Turbopack使用）
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# コードチェック
npm run lint

# 型チェック
npm run type-check
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # ダッシュボード
│   ├── inventory/         # 在庫管理ページ
│   ├── forecast/          # 需要予測ページ
│   ├── integrations/      # システム連携ページ
│   ├── layout.tsx         # ルートレイアウト
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── layout/           # レイアウト関連
│   ├── dashboard/        # ダッシュボード関連
│   ├── inventory/        # 在庫管理関連
│   └── forecast/         # 需要予測関連
├── data/                 # サンプルデータ
│   └── sampleData.ts     # アパレル業界向けデータ
└── types/                # TypeScript型定義
    └── index.ts          # 共通型定義
```

## 💼 ビジネス機能詳細

### 拠点管理
- **自社ECサイト倉庫** - 直接運営の在庫
- **楽天モール倉庫** - 楽天市場向け在庫
- **Amazon FBA倉庫** - Amazon預け在庫
- **ZOZOTOWN倉庫** - ZOZOTOWN預け在庫

### 在庫ステータス
- 🟢 **在庫十分** - 適正在庫レベル
- 🟡 **在庫普通** - 注意が必要なレベル
- 🟠 **在庫少** - 発注検討が必要
- 🔴 **在庫切れ** - 緊急発注が必要

### AI予測機能
- 📈 **需要予測** - 将来の販売数予測
- 🎯 **精度監視** - 予測モデルの性能追跡
- 🧠 **自動学習** - データに基づくモデル改善
- 📊 **信頼度表示** - 予測の確信度表示

## 🔧 カスタマイズ

### 拠点の追加
1. `src/data/sampleData.ts` でwarehouse情報を追加
2. `src/types/index.ts` でWarehouseType型を拡張
3. UI色設定をTailwind configで調整

### 連携方式の拡張
1. IntegrationConfig型に新しい連携タイプを追加
2. 対応するUI コンポーネントを実装
3. API エンドポイントの設定

## 📊 サンプルデータ

システムには以下のサンプルデータが含まれています：

- **商品データ** - Tシャツ、デニムジャケット、パンツ、ワンピースなど
- **在庫データ** - 各拠点の在庫状況
- **売上データ** - 過去の販売実績
- **予測データ** - AI需要予測結果

## 🔒 セキュリティ

- TypeScriptによる型安全性
- ESLintによるコード品質管理
- APIキー等の機密情報は環境変数で管理

## 📈 パフォーマンス

- Turbopackによる高速ビルド
- Next.js App Routerによる最適化
- コンポーネントの遅延読み込み

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📞 サポート

- 📖 [ドキュメント](docs/)
- 🐛 [Issue報告](https://github.com/your-repo/issues)
- 💬 [ディスカッション](https://github.com/your-repo/discussions)

## 🚀 ロードマップ

- [ ] モバイルアプリ対応
- [ ] リアルタイム通知機能
- [ ] 高度な分析レポート
- [ ] 外部API連携の拡張
- [ ] マルチテナント対応

---

⭐ このプロジェクトが役に立った場合は、Starをつけていただけると嬉しいです！ 