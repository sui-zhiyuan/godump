package main

import (
	"context"

	"github.com/sui-zhiyuan/godump/dump"
)

func main() {
	var ctx = context.Background()
	subFunc(ctx)
}

func subFunc(ctx context.Context) {
	ctx = dump.SubScope(ctx, "sub")

	dump.Dump(ctx, "hello")
}
