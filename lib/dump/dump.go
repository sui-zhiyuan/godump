package dump

import (
	"context"
	"fmt"
)

func Dump(ctx context.Context, v interface{}) {
	fmt.Printf("%#v", v)
}

func SubScope(ctx context.Context, name string) context.Context {
	return ctx
}
